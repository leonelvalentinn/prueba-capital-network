import { addToast } from '@heroui/react'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

export default function useFileDrop() {
  const [files, setFiles] = useState<File[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prev) => [...prev, ...acceptedFiles])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': [],
      'video/*': [],
    },
    multiple: true,
    onDrop,
    onDropRejected: (fileRejections) => {
      fileRejections.forEach((rejection) => {
        const fileName = rejection.file.name
        const reason = rejection.errors[0]?.message ?? 'Tipo de archivo no permitido'

        addToast({
          title: 'Archivo inválido',
          description: `${fileName}: ${reason}`,
          color: 'danger',
        })
      })
    },
  })

  const removeFile = (id: number) => {
    setFiles((prev) => prev.filter((_, index) => index !== id))
  }

  return {
    files,
    isDragActive,
    getRootProps,
    getInputProps,
    removeFile,
  }
}
