// Contacts array with initial data
const contacts = [
  { id: 1, name: "Lila Chea ", phone: "514-273-2980" },
  { id: 2, name: "Sarah Anne", phone: "438-379-4178" }
];

let nextId = 3;

// Render contacts to the page
function renderContacts() {
  const contactsList = document.getElementById('contactsList');
  const emptyState = document.getElementById('emptyState');
  const contactCount = document.getElementById('contactCount');
  
  // Update contact count
  contactCount.textContent = contacts.length;
  
  contactsList.innerHTML = '';

  if (contacts.length === 0) {
    emptyState.style.display = 'block';
    return;
  }

  emptyState.style.display = 'none';

  contacts.forEach(contact => {
    const contactDiv = document.createElement('div');
    contactDiv.className = 'contact-item';
    contactDiv.innerHTML = `
      <div class="contact-info">
        <strong>${contact.name}</strong> <span class="contact-phone">- ${contact.phone}</span>
      </div>
      <button class="delete-btn" onclick="deleteContact(${contact.id})">
        <i class="fas fa-trash"></i> Delete
      </button>
    `;
    contactsList.appendChild(contactDiv);
  });
}

// Add a new contact
function addContact() {
  const nameInput = document.getElementById('nameInput');
  const phoneInput = document.getElementById('phoneInput');

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  if (name === '' || phone === '') {
    alert('Please fill in all fields');
    return;
  }

  const newContact = {
    id: nextId,
    name: name,
    phone: phone
  };

  contacts.push(newContact);
  nextId++;

  nameInput.value = '';
  phoneInput.value = '';

  renderContacts();
}

// Delete a contact
function deleteContact(id) {
  contacts = contacts.filter(c => c.id !== id);
  renderContacts();
}

// Initial render
renderContacts();