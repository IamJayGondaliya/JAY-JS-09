/*
    Error:
        - compile time unhandled code.
        - occures on compile time, by syntax mistake.
        - occures by developer.
        - can be handled by modifying the code only.
        - prevents the code compilation.

    Exception:
        - run time unhandled code.
        - occures on run time, by some logical mistake.
        - occures by developer or user.
        - can be handled by Exception Handling blocks.
        - prevents the further code execution.

        Exception handling blocks:
            - try
            - catch
            - finally (optional)

        Syntax:

            try {
                // Code which may occure an exception.
                [throw exception]
            }
            catch(err) {
                // Solution of specific exception.
            }
            finally {
                // Conclusion message
                // Will exceute no matter the exception is occured or not.
            }


*/
console.log("Start code....");

try {
  let a = 5,
    b = 0;
  console.log("Answer: ", a.toLowerCase());
} catch (val) {
  if (val.name == "ReferenceError") {
    console.log("Variables are not declared...");
  } else if (val.name == "TypeError") {
    console.log("You are not using string...");
  } else {
    console.log("Exception: " + val.name);
  }
} finally {
  console.log("Exception handled successfully !!");
}

console.log("End of the code...");
