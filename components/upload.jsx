import React, { useEffect } from "react";
import { useUploadHook } from "../hooks/useUpload";

export function Upload() {
    const [
        files,
        percent,
        handleChange,
        handleUpload,
        handleGetAll,
        handleRemove
     ] = useUploadHook();

    useEffect(() => {
        handleGetAll();
    }, []);

    return (
        <div>
            <input type="file" onChange={handleChange} name="archivo" />
            <button onClick={handleUpload}>Upload to Firebase</button>
            <button onClick={handleRemove}>Remove from Firebase</button>
            <p>{percent} "% done</p>
            {
                files.map((item, key) => {
                    return <img width="100px" src={item} key={key} />
                })
            }
        </div>
    )
}