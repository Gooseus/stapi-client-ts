import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
import type { TradingCardSetBase } from './TradingCardSetBase';
/**
 * Response object for trading card sets search
 */
export type TradingCardSetBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of trading card sets matching given criteria
     */
    tradingCardSets?: Array<TradingCardSetBase>;
};
