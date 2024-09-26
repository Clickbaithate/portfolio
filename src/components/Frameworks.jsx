import SkillCard from "./SkillCard";

const Frameworks = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">

      <SkillCard title="React JS" 
        imageUrl="https://cdn3d.iconscout.com/3d/free/thumb/free-react-3d-icon-download-in-png-blend-fbx-gltf-file-formats--facebook-logo-native-javascript-library-user-interfaces-coding-lang-pack-logos-icons-7578010.png?f=webp" 
        description="Proficient Level" 
      />

      <SkillCard title="Flutter" 
        imageUrl="https://cdn3d.iconscout.com/3d/free/thumb/free-flutter-3d-icon-download-in-png-blend-fbx-gltf-file-formats--android-logo-google-dart-coding-lang-pack-logos-icons-7577998.png" 
        description="Intermediate Level" 
      />

      <SkillCard title="Android Studio" 
        imageUrl="https://cdn3d.iconscout.com/3d/free/thumb/free-android-3d-logo-download-in-png-blend-fbx-gltf-file-formats--technology-social-media-pack-logos-4642762.png?f=webp" 
        description="Novice Level" 
      />

      <SkillCard title="Ruby on Rails" 
        imageUrl="https://cdn3d.iconscout.com/3d/free/thumb/free-ruby-3d-icon-download-in-png-blend-fbx-gltf-file-formats--programming-language-high-level-interpreted-logo-coding-lang-pack-logos-icons-7578016.png?f=webp" 
        description="Novice Level" 
      />

      </div>
    </div>
  );
}

export default Frameworks;