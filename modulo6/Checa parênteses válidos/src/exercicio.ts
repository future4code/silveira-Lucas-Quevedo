
    
function checaParenteses(strings:string) {
    const stack:any = [];
  
    for (let check of strings) {
      if (check === "(" || check === "[" || check === "{") {
        stack.push(check);
      } else {
        const lastOpeningCheck = stack.pop();
        if(!lastOpeningCheck) {
          return false
        } else if (
          (lastOpeningCheck === "(" && check !== ")") ||
          (lastOpeningCheck === "[" && check !== "]") ||
          (lastOpeningCheck === "{" && check !== "}")
        ) {
          return false;
        }
      }
    }
  
    if (stack.length > 0) {
      return false;
    }
  
    return true;
  }

  console.log(checaParenteses("("))