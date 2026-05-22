import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";

config({ path: "../.env.local" });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const file = "C:/Users/guilh/Downloads/fotos para o site/Darah coelho/darah home.png";

try {
  console.log("Subindo darah home...");
  const result = await cloudinary.uploader.upload(file, {
    public_id: "darah/Darah coelho/darah-home",
    overwrite: true,
    resource_type: "image",
  });
  console.log(`✓ ${result.public_id} (${Math.round(result.bytes / 1024)}KB) ${result.width}x${result.height}`);
} catch (err) {
  console.error(`✗ ${err.message}`);
}
