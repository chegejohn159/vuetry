const state = {
    stocks: [],
    funds:10000
};

const mutations = {
    'BUY_STOCK'(state, {stockid, quantity, stockprice}) {
        const record = state.stocks.find(element => element.id == stockid);
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockid,
                quantity: quantity
            });
        }
        state.funds -= stockprice * quantity;
    },
    'SELL_STOCK' (state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id == stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    },
    'SET_PORTFOLIO' (state, portfolio) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
};



const getters = {
    stockPortfolio (state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds (state) {
        return state.funds;
      }
};
const actions = {
    initport: ({commit}) => {
        commit('SET_PORTIFOLIO')
    },
    sellStock({commit}, order) {
        commit('SELL_STOCK', order);
    }

};

export default {
    state,
    mutations,
    actions,
    getters
};