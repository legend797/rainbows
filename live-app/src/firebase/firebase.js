'use client';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { clientConfig } from "@/app/config/client-config";

// Init Firebase
export const app = initializeApp(clientConfig);
export const database = getDatabase(app);
