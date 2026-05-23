const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const formData = { email: '', message: '' };

const populateFromStorage = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    formData.email = parsed.email ?? '';
    formData.message = parsed.message ?? '';
    formEl.elements.email.value = formData.email;
    formEl.elements.message.value = formData.message;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
};

const handleInput = event => {
  const { name, value } = event.target;
  if (!(name in formData)) return;

  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const handleSubmit = event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  formEl.reset();
};

populateFromStorage();
formEl.addEventListener('input', handleInput);
formEl.addEventListener('submit', handleSubmit);
