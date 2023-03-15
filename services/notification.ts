export const sendNotify = (message: {
  method: string
  amount: number
  unit: number
  email: string
}) => {
  fetch('/api/notify', {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(message)
  }).then(result => {
      console.log(result)
    })
};
