// todo: make the styleinjection optional
import './styles/dropdown.css';
/*export function injectDropdownStyles() {
  const styleId = 'dropdown-menu-styles';
  
  // Check if styles are already injected
  if (document.getElementById(styleId)) return;

  const styleElement = document.createElement('style');
  styleElement.id = styleId;
  styleElement.textContent = dropdownStyles;
  document.head.appendChild(styleElement);
}*/

export function createDropdownMenu(options = {}) {
    // Create the link element for boxicons
    const linkElement = document.createElement('link');
    linkElement.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
    linkElement.rel = 'stylesheet';
    document.head.appendChild(linkElement);
    // object decustruction
    const {
        items = [
            { href: '#create', icon: 'bx-plus-circle', text: 'Create New' },
            { href: '#draft', icon: 'bx-book', text: 'All Drafts' },
            { href: '#move', icon: 'bx-folder', text: 'Move To' },
            { href: '#profile', icon: 'bx-user', text: 'Profile Settings' },
            { href: '#notification', icon: 'bx-bell', text: 'Notification' },
            { href: '#settings', icon: 'bx-cog', text: 'Settings' }
        ],
        buttonText = 'Dropdown',
        containerClass = 'dropdown-container',
    } = options;

    // Create container
    const container = document.createElement('div');
    container.className = containerClass;

    // Create button
    const button = document.createElement('button');
    button.className = 'dropdown-btn';
    button.textContent = buttonText + ' ';

    // Create arrow icon
    const arrowIcon = document.createElement('i');
    arrowIcon.className = 'bx bx-chevron-down';
    button.appendChild(arrowIcon);

    // Create dropdown container
    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown';

    // Create dropdown items
    items.forEach(item => {
        const link = document.createElement('a');
        link.href = item.href;

        const icon = document.createElement('i');
        icon.className = `bx ${item.icon}`;
        link.appendChild(icon);

        link.appendChild(document.createTextNode(' ' + item.text));
        dropdown.appendChild(link);
    });

    // Add event listeners
    const toggleDropdown = () => {
        dropdown.classList.toggle('show');
        arrowIcon.classList.toggle('arrow');
    };

    button.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown();
    });

    document.documentElement.addEventListener('click', () => {
        if (dropdown.classList.contains('show')) {
            toggleDropdown();
        }
    });

    // Append elements
    container.appendChild(button);
    container.appendChild(dropdown);
    return container;
}