"use client"

import { Button } from "@repo/ui/button";
import {useBalance} from "@repo/store/hooks"

export default function Home(){
  const balance = useBalance();
  return (
    <div className="m-10">
      User landing page
      <Button />
      {balance}
    </div>
  )
}