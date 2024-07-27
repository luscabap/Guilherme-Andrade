type ErrorMessageProps = {
  errorText: string
}

export const ErrorMessage = ({ errorText }: ErrorMessageProps) => {
  return (
    <p className="text-red-900 mt-2">{errorText}</p>
  )
}