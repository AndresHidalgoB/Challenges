import { firebaseStorage } from "./config";
import { ref, uploadBytesResumable, listAll, deleteObject, getDownloadURL } from "firebase/storage";

export function upload(file) {
    if (!file)
        alert("Please choose a file first!");

    const storageRef = ref(firebaseStorage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return uploadTask;
}

export function remove(file) {
    if (!file)
        alert("Please choose a file first!");

    const storageRef = ref(firebaseStorage, `/files/${file.name}`);
    const url = getDownloadURL(storageRef);
    const removeTask = deleteObject(storageRef);

    
    return url;
}

export async function getAll() {
    const listRef = ref(firebaseStorage, "/files/");
    return listAll(listRef);
}