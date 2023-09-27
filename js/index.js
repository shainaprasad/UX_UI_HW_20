// JavaScript for the case study page

// Function to toggle the sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Add an event listener to the sidebar toggle button
document.getElementById('sidebar-toggle').addEventListener('click', toggleSidebar);

// Function to display a modal when the "Read More" button is clicked
function showModal() {
    const modal = document.getElementById('case-study-modal');
    modal.style.display = 'block';
}

// Add an event listener to the "Read More" button
document.getElementById('read-more-button').addEventListener('click', showModal);

// Function to close the modal when the close button is clicked
function closeModal() {
    const modal = document.getElementById('case-study-modal');
    modal.style.display = 'none';
}

// Add an event listener to the modal close button
document.getElementById('modal-close-button').addEventListener('click', closeModal);

// Add an event listener to close the modal when clicking outside of it
window.addEventListener('click', (event) => {
    const modal = document.getElementById('case-study-modal');
    if (event.target === modal) {
        closeModal();
    }
});
