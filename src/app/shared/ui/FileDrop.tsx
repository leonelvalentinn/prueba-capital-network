'use client'

import Image from 'next/image'
import { UploadIcon } from './icons'
import { XIcon } from './icons/XIcon'
import useFileDrop from './hooks/useFileDrop'

export const FileDrop = () => {
  const { files, isDragActive, getRootProps, getInputProps, removeFile } = useFileDrop()

  return (
    <div className='w-full'>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-md p-6 text-center transition-all cursor-pointer ${
          isDragActive ? 'bg-neutral-100 border-neutral-500' : 'border-neutral-300'
        }`}
      >
        <input {...getInputProps()} />
        <span className='text-neutral-700 flex items-center justify-center flex-col gap-4'>
          <UploadIcon className='inline-block mr-1 w-6 h-6' />
          Arrastra imágenes o videos aquí, o haz clic para seleccionar
        </span>
      </div>

      <div className='mt-4 grid grid-cols-2 md:grid-cols-4 gap-4'>
        {files.map((file, i) => (
          <div key={i} className='flex flex-col items-center gap-2'>
            <div className='relative w-32 h-32 shadow'>
              <button
                type='button'
                aria-label='Remove file'
                color='danger'
                onClick={() => removeFile(i)}
                className='absolute top-0 right-0 p-0 text-xs z-20 text-neutral-50 cursor-pointer bg-red-400 rounded-lg'
              >
                <XIcon className='w-4 h-4 text-neutral-50' />
              </button>
              {file.type.startsWith('image/') ? (
                <Image
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  width={128}
                  height={128}
                  className='w-32 h-32 object-cover rounded shadow'
                />
              ) : (
                <video className='w-32 h-32 rounded shadow' controls>
                  <source src={URL.createObjectURL(file)} type={file.type} />
                  Tu navegador no soporta video.
                </video>
              )}
            </div>
            <p className='text-xs text-center break-all'>{file.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
