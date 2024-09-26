import SkillCard from "./SkillCard";

const Tools = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-10">

      <SkillCard title="Git & GitHub" 
        imageUrl="https://cdn3d.iconscout.com/3d/free/thumb/free-git-3d-icon-download-in-png-blend-fbx-gltf-file-formats--github-logo-version-control-system-vcs-coding-lang-pack-logos-icons-7578021.png?f=webp" 
        description="Proficient Level" 
      />

      <SkillCard title="PostgreSQL & SQLite" 
        imageUrl="https://cdn3d.iconscout.com/3d/free/thumb/free-sql-3d-icon-download-in-png-blend-fbx-gltf-file-formats--database-data-management-relational-logo-analysis-coding-lang-pack-logos-icons-7578022.png?f=webp" 
        description="Novice Level" 
      />

      <SkillCard title="Figma" 
        imageUrl="https://cdn3d.iconscout.com/3d/free/thumb/free-figma-3d-logo-download-in-png-blend-fbx-gltf-file-formats--software-social-media-technology-pack-company-brand-logos-4642727.png?f=webp" 
        description="Novice Level" 
      />

      <SkillCard title="Node JS & Express JS" 
        imageUrl="https://cdn3d.iconscout.com/3d/free/thumb/free-nodejs-3d-icon-download-in-png-blend-fbx-gltf-file-formats--javascript-runtime-backend-node-js-logo-coding-lang-pack-logos-icons-7578002.png" 
        description="Novice Level" 
      />

      </div>
    </div>
  );
}

export default Tools;