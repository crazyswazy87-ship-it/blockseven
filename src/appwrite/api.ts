import { ID } from "appwrite";
import {
  databases,
  DATABASE_ID,
  INQUIRIES_COLLECTION_ID,
} from "./config";

type InquiryData = {
  name: string;
  email: string;
  phone: string;
  type: string;
  budget: string;
  message: string;
};

export const createInquiry = async (data: InquiryData) => {
  return databases.createDocument(
    DATABASE_ID,
    INQUIRIES_COLLECTION_ID,
    ID.unique(),
    {
      name: data.name,
      email: data.email,
      phone: data.phone,
      type: data.type,
      budget: data.budget,
      message: data.message,
      source: "blockseven.vercel.app",
    }
  );
};