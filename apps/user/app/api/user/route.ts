import { NextResponse } from "next/server"
import { prisma } from "@repo/db";

export const GET = async () => {
    await prisma.user.create({
        data: {
            email: "asdkjjfnfbkj",
            name: "adsads"
        }
    })
    return NextResponse.json({
        message: "hi there"
    })
}