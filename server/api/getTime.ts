export default defineEventHandler(async (event) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
    const now = new Date();


  return {
    time: now.toLocaleString('de-DE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }),
    timestamp: Date.now()
  };
});
