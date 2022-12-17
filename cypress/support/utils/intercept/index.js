/**
 * Intercept Dictionaries с проверкой респонса на статус-код 200
 * @param {object} params - параметры
 * @param {string} params.url - url /graphql
 */
export const interceptDictionaries = (params) => {
    const DICTIONARIES_QUERY = 'getDictionaries';
    cy.intercept({
        method: 'POST',
        url: params.url
    }, (req) => {
        if (req.body.query.includes(DICTIONARIES_QUERY)) {
            req.alias = 'dictionaries'
            req.on('response', (res) => {
                expect(res.statusCode).to.eq(200);
            });
        }
    });
};

/**
 * Проверка респонса на наличие ошибки
 * @param {string} res - response
 * @param {string} queryName - название квери
 */
export const checkBaseResponse = (res, queryName) => {
    expect(res.statusCode).to.eq(200);
    expect(res.body.data[queryName].errors).to.be.undefined;
    expect(res.body.data[queryName].result).to.eq(true);
}