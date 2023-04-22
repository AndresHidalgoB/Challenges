import React, { useEffect } from "react";
import { useUploadHook } from "../hooks/useUpload";

export function Upload() {
    const [
        files,
        percent,
        handleChange,
        handleUpload,
        handleGetAll,
     ] = useUploadHook();

    useEffect(() => {
        handleGetAll();
    }, []);

    return (
        <div>
            <input type="file" onChange={handleChange} name="archivo" />
            <button onClick={handleUpload}>Subir a Firebase</button>
            <p>{percent} "% done</p>
            {
                files.map((item, key) => {
                    return <img width="100px" src={item} key={key} />
                })
            }
        </div>
    )
}