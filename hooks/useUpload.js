import { getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { getAll, remove, upload } from "../firebase/files";

export function useUploadHook() {
    const [files, setFiles] = useState([]);
    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);

    const handleChange = (event) =>
        setFile(event.target.files[0]);

    const handleUpload = () => {
        const uploadTask = upload(file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                setPercent(percent);
            },
            (err) => console.log(err),
            async () => {
                const url = await getDownloadURL(uploadTask.snapshot.ref);
                setFiles(list => [...list, url]);
            }
        );
    };

    const handleRemove = () => {
        const url = remove(file);
        url.then((u) => {
            // Remove File
            let f = [...files];
            let index = f.findIndex((data) => data == u);
            f.splice(index, 1);

            setFiles(f);
            console.log(u);
        });
    }

    const handleGetAll = async () => {
        const {items} = await getAll();

        items.forEach( async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            setFiles(list => [...list, url]);
        });
    };

    return [files, percent, handleChange, handleUpload, handleGetAll, handleRemove];
}