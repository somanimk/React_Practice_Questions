import React, {useState} from 'react'

export const Eleven = () => {
    const[file,setFile]=useState(null);

    const handleFileChange=(e)=>{
        const selectedFile=e.target.files[0];
        setFile(selectedFile)
    }
  return (
    <div>
        <input type="file" accept="image/*" onChange={handleFileChange}/>
        {file && <img src={URL.createObjectURL(file)} alt='Uploaded'/>}
    </div>
  )
}
export default Eleven

// 1. Why e.target.files[0] and not e.target.value:
// e.target.value is typically used for form inputs like text fields where you are interested in the input value itself (i.e., the text typed into a field).

// For file inputs (i.e., <input type="file" />), the selected files are stored in an array-like object called FileList, which is available via e.target.files.

// e.target.files returns a FileList object, which is an array-like structure containing one or more files chosen by the user.
// e.target.files[0] is used to get the first (and typically only) file selected by the user, as users can select multiple files if the multiple attribute is added to the <input> tag.
// 2. Why is files an array-like object?
// The files property is an array-like object (FileList) because the file input allows multiple files to be selected. Even if you're only selecting one file, e.target.files will still return a FileList, which behaves like an array.

// If the multiple attribute is used (e.g., <input type="file" multiple />), users can select more than one file, and in this case, e.target.files will contain multiple file objects, hence the array-like structure.
// Even when you're selecting only one file, e.target.files still returns a FileList, which is why you access the first element using e.target.files[0].

// Explanation:
// URL.createObjectURL(file): This method creates a temporary URL that points to the file stored in your local machine (in this case, the image file the user uploads). This URL is only accessible within the browser for that session.

// Why it's needed: The uploaded file is stored as a JavaScript File object, which cannot be directly used as the src attribute of an <img> tag. So, URL.createObjectURL(file) generates a valid URL that points to the local file, allowing the browser to display the image.

// Flow:

// The user selects an image using the file input (<input type="file">).
// In the handleFileChange function, you access the selected file through e.target.files[0].
// The file state gets updated with this file object.
// When file is not null, you display an image (<img>), and the src is set to the temporary URL created by URL.createObjectURL(file).