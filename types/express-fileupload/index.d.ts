// Type definitions for express-fileupload 1.1
// Project: https://github.com/richardgirges/express-fileupload#readme
// Definitions by: Gintautas Miselis <https://github.com/Naktibalda>
//                 Sefa Ilkimen <https://github.com/silkimen>
//                 Tomas Vosicky <https://github.com/vosatom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import express = require('express');

declare global {
    namespace Express {
        interface Request {
            files?: fileUpload.FileArray;
        }
    }
}

export = fileUpload;

declare function fileUpload(options?: fileUpload.Options): express.RequestHandler;

declare namespace fileUpload {
    class FileArray {
        [index: string]: UploadedFile
    }

    interface UploadedFile {
        name: string;
        encoding: string;
        mimetype: string;
        data: Buffer;
        size: number;
        tempFilePath: string;
        truncated: boolean;
        md5: string;
        mv(path: string, callback: (err: any) => void): void;
        mv(path: string): Promise<void>;
    }

    interface Options {
        debug?: boolean;
        safeFileNames?: boolean;
        preserveExtension?: boolean | string | number;
        abortOnLimit?: boolean;
        [property: string]: any;
    }
}
