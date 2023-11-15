export const getRandomScene = (scenes) => {
    console.log("getRandomScene scenes", scenes)
    console.log("scenes.length", scenes.length)
    const randomIndex = Math.floor(Math.random() * scenes.length);
    return scenes[randomIndex];
  };
  
  export const filterScenesHandler = (scenes, usedScene) => { 
    console.log("scenes2", scenes)
    return scenes.filter((scene) => usedScene.id !== scene.id);
  };
