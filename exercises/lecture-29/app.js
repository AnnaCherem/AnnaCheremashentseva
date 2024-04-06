
class AuthException extends Error {
    constructor(code, message) {
      super(message ? `${code}: ${message}` : code);
    }
    
    toString() {
      return this.message;
    }
  }
  
  let isAuth = (auth)  => auth ?? false;
  
  let dialogBoxId = document.getElementById("dialogBox");
  let checkAuth = document.querySelector(".check-auth");
  
  checkAuth.addEventListener("click", () => {
    try {
      if (!isAuth()) {
        throw new AuthException('FORBIDDEN', "You don't have access to this page");
      } else {
        window.open('success.html', '_blank');
      }
    } catch(e) {
      dialogBoxId.querySelector(".message").textContent = e.toString();
      showDialog();
    }
  });
  
  function showDialog() {
    dialogBoxId.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
      }
    });
    dialogBoxId.showModal();
  }
  
  function closeDialog() {
    dialogBoxId.close(); 
  }
  