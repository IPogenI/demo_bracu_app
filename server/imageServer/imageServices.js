import { google } from 'googleapis'
import fs from 'fs'
// import dotenv from 'dotenv'
// dotenv.config()


const credentials = {
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uris: [process.env.GOOGLE_REDIRECT_URI]
}


const refreshToken = process.env.GOOGLE_REFRESH_TOKEN

const { client_id, client_secret, redirect_uris } = credentials
const oauth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
)

oauth2Client.setCredentials({ refresh_token: refreshToken })

const drive = google.drive({
    version: "v3",
    auth: oauth2Client
})

export const uploadImage = async (filePath, fileName, mimeType) => {
    
    try {
        const res = await drive.files.create({
            requestBody: {
                name: fileName,
                mimeType: mimeType
            },

            media: {
                mimeType: mimeType,
                body: fs.createReadStream(filePath)
            }
        })

        // Setting Image Permission to Public
        const fileId = res.data.id;

        await drive.permissions.create({
            fileId: fileId,
            requestBody: {
                role: 'reader',
                type: 'anyone',
            },
        })

        // const res2 = await drive.files.get({
        //     fileId: fileId,
        //     fields: 'webViewLink, webContentLink'
        // })

        fs.unlinkSync(filePath)
         return res.data
        // return res2.data

    } catch (error) {
        console.log(error)
        throw error
    }
}

export const deleteImageFromDrive = async (fileId) => {

    try {
        await drive.files.delete({fileId})
        console.log("Image deleted from Drive")
    }catch (error) {
        console.error("Image not deleted from drive")
        throw error
    }
}

