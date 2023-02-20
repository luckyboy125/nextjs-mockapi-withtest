import axios from "axios";
import { base_url } from "../../config/const";

export default async (req: any, res: any) => {
  try {
    const url = process.env.BASE_URL || base_url;
    const response: any = await axios.get(url);

    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(400).json({
      error: `Oops, something went wrong...`,
    });
  }
};
