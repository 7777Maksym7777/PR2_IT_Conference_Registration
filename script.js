const form=document.querySelector("#registration-form");
const attachment=document.querySelector("#attachment");
const fileName=document.querySelector("#file-name");
const formStatus=document.querySelector("#form-status");

attachment.addEventListener("change",()=>{
  const file=attachment.files[0];
  if(!file){fileName.textContent="Файл не вибрано";return;}
  const allowed=["image/png","image/jpeg","application/pdf"];
  const maxSize=5*1024*1024;
  if(!allowed.includes(file.type)){
    attachment.setCustomValidity("Дозволено завантажувати лише PNG, JPG або PDF.");
    attachment.reportValidity();attachment.value="";fileName.textContent="Непідтримуваний формат";return;
  }
  if(file.size>maxSize){
    attachment.setCustomValidity("Розмір файлу не повинен перевищувати 5 МБ.");
    attachment.reportValidity();attachment.value="";fileName.textContent="Файл завеликий";return;
  }
  attachment.setCustomValidity("");
  fileName.textContent=`${file.name} (${(file.size/1024/1024).toFixed(2)} МБ)`;
});
form.addEventListener("submit",(event)=>{
  event.preventDefault();
  if(!form.checkValidity()){form.reportValidity();return;}
  const participant=document.querySelector("#full-name").value.trim();
  formStatus.textContent=`Дякуємо, ${participant}! Демонстраційну реєстрацію успішно перевірено.`;
  form.reset();fileName.textContent="Файл не вибрано";
});
