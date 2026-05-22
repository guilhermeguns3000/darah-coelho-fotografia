import { v2 as cloudinary } from "cloudinary";
import { readdir, stat } from "fs/promises";
import { join, extname, basename } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: "../.env.local" });

const __dirname = dirname(fileURLToPath(import.meta.url));

cloudinary.config({
  cloud_name: "djjacet57",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const FOTO_DIR = "C:\\Users\\guilh\\Downloads\\fotos para o site";
const EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".heic", ".heif"];

async function listImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const images = [];
  for (const entry of entries) {
    if (entry.isFile() && EXTENSIONS.includes(extname(entry.name).toLowerCase())) {
      images.push(join(dir, entry.name));
    }
  }
  return images;
}

async function uploadFolder(folderPath, cloudFolder) {
  const images = await listImages(folderPath);
  if (images.length === 0) {
    console.log(`  ⚠️  Nenhuma imagem encontrada em ${folderPath}`);
    return [];
  }

  console.log(`\n📁 ${cloudFolder} — ${images.length} imagens encontradas`);
  const results = [];

  for (let i = 0; i < images.length; i++) {
    const filePath = images[i];
    const fileName = basename(filePath, extname(filePath))
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

    const publicId = `darah/${cloudFolder}/${fileName}`;

    process.stdout.write(`  [${i + 1}/${images.length}] Enviando ${basename(filePath)}... `);

    try {
      const result = await cloudinary.uploader.upload(filePath, {
        public_id: publicId,
        overwrite: true,
        resource_type: "image",
        transformation: [{ quality: "auto", fetch_format: "auto" }],
      });
      console.log(`✓`);
      results.push({ file: basename(filePath), url: result.secure_url, publicId: result.public_id });
    } catch (err) {
      console.log(`✗ Erro: ${err.message}`);
    }
  }

  return results;
}

async function main() {
  console.log("🚀 Iniciando upload para Cloudinary...\n");

  const subfolders = await readdir(FOTO_DIR, { withFileTypes: true });
  const allResults = {};

  for (const entry of subfolders) {
    if (!entry.isDirectory()) continue;
    const folderPath = join(FOTO_DIR, entry.name);
    const results = await uploadFolder(folderPath, entry.name);
    allResults[entry.name] = results;
  }

  console.log("\n\n✅ UPLOAD CONCLUÍDO!\n");
  console.log("=".repeat(60));
  console.log("\n📋 RELATÓRIO DE URLs:\n");

  for (const [folder, images] of Object.entries(allResults)) {
    if (images.length === 0) continue;
    console.log(`\n## ${folder.toUpperCase()} (${images.length} imagens)`);
    images.forEach((img, i) => {
      // URL otimizada com transformações Cloudinary
      const optimizedUrl = img.url.replace(
        "/upload/",
        "/upload/f_auto,q_auto,w_1920/"
      );
      console.log(`${i + 1}. ${img.file}`);
      console.log(`   ${optimizedUrl}\n`);
    });
  }

  console.log("=".repeat(60));
  console.log("\nCopie as URLs acima e cole no chat para eu atualizar o site!\n");
}

main().catch(console.error);
