:root {
    --primary-color: hsl(172, 67%, 45%);
    --dark-cyan: hsl(183, 100%, 15%);
    --dark-grayish-cyan: hsl(186, 14%, 43%);
    --grayish-cyan: hsl(184, 14%, 56%);
    --light-grayish-cyan: hsl(185, 41%, 84%);
    --very-light-grayish-cyan: hsl(189, 41%, 97%);
    --white: hsl(0, 0%, 100%);
    --error-red: hsl(13, 70%, 61%);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Space Mono', monospace;
    background-color: var(--light-grayish-cyan);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

h1 {
    color: var(--dark-cyan);
    letter-spacing: 8px;
    margin-bottom: 2rem;
    text-align: center;
}

/* Main Container */
.container {
    background-color: var(--white);
    padding: 2rem;
    border-radius: 25px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    max-width: 920px;
    width: 100%;
}

/* Input Fields */
label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--dark-grayish-cyan);
    font-weight: 700;
}

input[type="number"] {
    width: 100%;
    padding: 0.5rem 1rem;
    border: 2px solid transparent;
    border-radius: 5px;
    background-color: var(--very-light-grayish-cyan);
    text-align: right;
    font-size: 1.5rem;
    font-family: 'Space Mono', monospace;
    color: var(--dark-cyan);
    font-weight: 700;
    outline: none;
    cursor: pointer;
}

input[type="number"]:focus {
    border-color: var(--primary-color);
}

/* Remove arrows from number input */
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

/* Input Sections with Icons */
.bill-section, .people-section {
    position: relative;
    margin-bottom: 2rem;
}

.bill-section::before, .people-section::before {
    position: absolute;
    top: 55%;
    left: 1rem;
    transform: translateY(-50%);
    color: var(--grayish-cyan);
}
.bill-section::before {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="18"><path fill="%239eAFAf" d="M11.568.1H2.99a2.99 2.99 0 0 0-2.99 2.99V18l2.99-1.5 2.99 1.5 2.99-1.5 2.99 1.5V2.99A2.99 2.99 0 0 0 11.568.1zM5.98 14.24a.748.748 0 0 1-1.496 0V3.75a.748.748 0 0 1 1.496 0v10.49zm2.99-1.496a.748.748 0 1 1-1.495 0 .748.748 0 0 1 1.495 0zm.002-2.244a.748.748 0 1 1-1.496 0 .748.748 0 0 1 1.496 0zm0-2.244a.748.748 0 1 1-1.496 0 .748.748 0 0 1 1.496 0zm0-2.244a.748.748 0 1 1-1.496 0 .748.748 0 0 1 1.496 0z"/></svg>');
}
.people-section::before {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="13" height="16"><path fill="%239eAFAf" d="M10.513 15.394c-.584.55-3.488 1.628-3.488 1.628s-2.903-1.078-3.488-1.628C1.22 13.34 0 11.42 0 9.215 0 4.126 2.925 0 6.525 0s6.525 4.126 6.525 9.215c0 2.204-1.22 4.125-3.537 6.179zM6.525 2.16c-1.923 0-3.488 1.52-3.488 3.407 0 1.888 1.565 3.407 3.488 3.407s3.488-1.52 3.488-3.407c0-1.888-1.565-3.407-3.488-3.407z"/></svg>');
}

/* Tip Buttons */
.tip-section {
    margin-bottom: 2rem;
}

.tip-buttons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}

.tip-btn, #custom-tip {
    padding: 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;
}

.tip-btn {
    background-color: var(--dark-cyan);
    color: var(--white);
}

.tip-btn:hover {
    background-color: hsl(172, 67%, 75%);
    color: var(--dark-cyan);
}

.tip-btn.active {
    background-color: var(--primary-color);
    color: var(--dark-cyan);
}

#custom-tip {
    width: 100%;
    text-align: center;
    padding-right: 0.5rem;
}

/* Results Section */
.results {
    background-color: var(--dark-cyan);
    color: var(--white);
    padding: 2.5rem 1.5rem 1.5rem;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.result-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.result-item .text p {
    font-weight: 700;
}

.result-item .text span {
    color: var(--grayish-cyan);
    font-size: 0.9rem;
}

.result-item .amount {
    font-size: 3rem;
    color: var(--primary-color);
    font-weight: 700;
}

#reset-btn {
    width: 100%;
    padding: 0.8rem;
    border-radius: 5px;
    border: none;
    background-color: var(--primary-color);
    color: var(--dark-cyan);
    font-size: 1.25rem;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.2s;
}

#reset-btn:hover {
    background-color: hsl(172, 67%, 75%);
}

#reset-btn:disabled {
    background-color: hsl(183, 79%, 24%);
    color: hsl(183, 100%, 35%);
    cursor: not-allowed;
}

/* Error State */
.labels {
    display: flex;
    justify-content: space-between;
}
.error {
    color: var(--error-red);
    display: none;
}
input.error-border {
    border-color: var(--error-red);
}


/* Responsive Design */
@media (max-width: 850px) {
    body {
        justify-content: flex-start;
        padding-top: 2rem;
    }
    
    .container {
        grid-template-columns: 1fr;
        width: 100%;
        max-width: 500px;
        border-radius: 25px 25px 0 0;
    }

    h1 {
        margin-bottom: 2rem;
    }

    .tip-buttons {
        grid-template-columns: repeat(2, 1fr);
    }

    .result-item .amount {
        font-size: 2rem;
    }

    .results {
        padding: 1.5rem;
    }

    #reset-btn {
        margin-top: 1rem;
    }
}
