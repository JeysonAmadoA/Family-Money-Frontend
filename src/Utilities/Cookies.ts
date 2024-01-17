
 export function getCookie(name: string): string | undefined {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    
    if (parts.length === 2) {
      const cookieValue = parts.pop();
      if (cookieValue !== undefined) {
        return cookieValue.split(';').shift();
      }
    }
    return undefined; 
  }
  