export default function handler(req, res) {
  res.status(200).json({
    message: "🚀 Serveur VLESS Actif!",
    config: "vless://ef7cccd5-f0af-4ec0-b5e8-991907458dca@ton-domaine.vercel.app:443?security=tls&encryption=none&type=ws&path=%2Fproxy#Mon-Serveur-Vercel"
  });
}
