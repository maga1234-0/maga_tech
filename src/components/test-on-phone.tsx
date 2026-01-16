"use client";

import { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

export function TestOnPhone() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Smartphone className="mr-2 h-4 w-4" />
          Test on Phone
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Test on Your Phone</DialogTitle>
          <DialogDescription>
            Scan this QR code with your phone's camera to open the app on your
            mobile device.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center p-4 bg-white rounded-lg">
          {url ? <QRCode value={url} /> : <p>Generating QR code...</p>}
        </div>
      </DialogContent>
    </Dialog>
  );
}
