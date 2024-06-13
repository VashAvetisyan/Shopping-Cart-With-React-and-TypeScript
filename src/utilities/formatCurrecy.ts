const CORRENCY_FORMATTER = new Intl.NumberFormat(
  undefined,
  {
    currency:"USD",
    style: "currency"
  }
)

function formatCurrecy(number:number) {
  return (
    CORRENCY_FORMATTER.format(number)
  )
}

export default formatCurrecy