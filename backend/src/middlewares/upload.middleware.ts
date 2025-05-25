import multer from "multer";
import path from "path";
import fs from "fs";

// Define o diretório de uploads
const uploadDir = path.resolve(__dirname, "../../uploads");

// Garante que o diretório existe
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configuração do multer para armazenamento local
export const upload = multer({
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => {
      cb(null, uploadDir);
    },
    filename: (_req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const ext = path.extname(file.originalname);
      cb(null, file.fieldname + "-" + uniqueSuffix + ext);
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});
