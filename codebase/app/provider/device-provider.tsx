"use client";

import { useEffect } from "react";
import { getDeviceInfo } from "tauri-plugin-device-info-api";

export default function DeviceProvider() {
    
  useEffect(() => {
    getDeviceInfo().then(console.log);
  }, []);

  return null;
}