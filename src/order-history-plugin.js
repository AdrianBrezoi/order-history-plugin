import OrderHistory from './components/order-history/order-history.vue';
import VueI18n from 'vue-i18n'

function install(Vue, locale) {
    Vue.use(new VueI18n({locale, messages}))
    Vue.filter('formatPrice', function (price, currency, locale) {
        if (!price || !currency || !locale) return ''
        const formatter = new Intl.NumberFormat(locale, {
            style: 'currency',
            currency,
            minimumFractionDigits: 2
        });
        return formatter.format(price);
    });
    Vue.component(OrderHistory.name, OrderHistory);
}

export default install;

const messages = {
    'en': {
        'title': 'Title',
        'description': 'Description',
        'price': 'Price',
    },
    'de': {
        'title': 'Titel',
        'description': 'Beschreibung',
        'price': 'Preis',
    },
    'nl': {
        'title': 'Titel',
        'description': 'Omschrijving',
        'price': 'Prijs',
    }
}