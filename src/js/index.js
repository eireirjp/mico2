// Import our custom CSS
import '../css/index.scss'

// BootstrapのJavaScript機能（モーダルなど）が必要な場合のみこれも追加
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Alpine.js
import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()