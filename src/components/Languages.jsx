import SkillCard from "./SkillCard";

const Languages = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">

      <SkillCard title="JavaScript" 
        imageUrl="https://static.vecteezy.com/system/resources/previews/012/697/298/original/3d-javascript-logo-design-free-png.png" 
        description="Proficient Level" 
      />

      <SkillCard title="Dart" 
        imageUrl="https://static.vecteezy.com/system/resources/previews/012/697/302/original/3d-dart-programming-language-logo-free-png.png" 
        description="Intermediate Level" 
      />

      <SkillCard title="Python" 
        imageUrl="https://static.vecteezy.com/system/resources/previews/012/697/295/original/3d-python-programming-language-logo-free-png.png" 
        description="Intermediate Level" 
      />

      <SkillCard title="C++" 
        imageUrl="https://cdn3d.iconscout.com/3d/free/thumb/free-s-3d-icon-download-in-png-blend-fbx-gltf-file-formats--c-plus-logo-programming-language-coding-lang-pack-logos-icons-7578015.png" 
        description="Novice Level" 
      />

      </div>
    </div>
  );
}

export default Languages;