'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import MessageReceived from "@/components/MessageReceived";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Home() {
  const [messageMahasiswa, setMessageMahasiswa] = useState("Tidak ada");
  const [messageRektor, setMessageRektor] = useState("Tidak ada");

  const handleMessageMahasiswa = (message) => {
    setMessageMahasiswa(message);
  }

  const handleMessageRektor = (message) => {
    setMessageRektor(message);
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-4 lg:flex-row">
      <Card className="w-full sm:w-[500px]">
        <CardHeader>
          <CardTitle>Mahasiswa</CardTitle>
          <CardDescription>Masukkan pesan yang ingin Anda kirim kepada Rektor.</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="pesanMahasiswa">Pesan</Label>
              <Textarea id="pesanMahasiswa" placeholder="Tulis pesan Anda" onChange={(e) => handleMessageMahasiswa(e.target.value)} />
            </div>
            <MessageReceived message={messageRektor} />
          </div>
        </CardContent>
      </Card>

      <Card className="w-full sm:w-[500px]">
        <CardHeader>
          <CardTitle>Rektor</CardTitle>
          <CardDescription>Masukkan pesan yang ingin Anda kirim kepada Mahasiswa.</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="pesanRektor">Pesan</Label>
              <Textarea id="pesanRektor" placeholder="Tulis pesan Anda" onChange={(e) => handleMessageRektor(e.target.value)} />
            </div>
            <MessageReceived message={messageMahasiswa} />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}