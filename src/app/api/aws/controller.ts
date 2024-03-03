import axios, {AxiosHeaders} from "axios";
import fs from "fs";
import path from "path";

const axiosInstance = axios.create({
    baseURL: `https://vision.googleapis.com/v1/images:annotate`
})

axiosInstance.interceptors.request.use(function (config) {
    const headers: AxiosHeaders = config.headers;
    headers['X-Goog-Api-Key'] = process.env.GOOGLE_API_KEY;
    headers.setContentType('application/json')
    config.headers = headers;
    return config;
});

// GET /api/google/
export const objectDetection = async (request, response) => {
    const {image64} = request.query;

    console.log(image64)
    
    const requstData = {
        requests: [
          {
            image: {
              content: image64
            },
            features: [
              {
                maxResults: 50,
                type: "OBJECT_LOCALIZATION"
              },
            ]
          }
        ]
      }

    const restRequest = await axios.post(`https://vision.googleapis.com/v1/images:annotate?key=${process.env.GOOGLE_API_KEY}`, requstData)

    console.log(restRequest)

    return response.status(200).json({success: true, message: restRequest.data})
}
