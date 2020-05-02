import React, { Component } from 'react'
import Homework from '../Homework.jsx'

class HW4 extends Component {
  render () {
    return (
      <Homework index='4'>
        <ol className='base'>
          <li>
            <ol class='letters'>
              <li>
                <p>Let {'$\\Bbb{F}$'} be a field with characteristic $p$, and {'$a, b \\in \\Bbb{F}$'}. Then</p>
                {'$$(a+b)^p = \\sum_{k=0}^p{p \\choose k}a^{p-k}b^k = a^p + \\left(\\sum_{k=0}^p{p \\choose k}a^kb^{p-k}\\right) + b^p.$$'}
                <p>Since the characteristic $p$ must be prime, we have {'$\\left.p\\middle|{p \\choose k}\\right.$'} for {'$0 < k < p$'} which means {'${p \\choose k} = np = 0$'}. Thus $(a+b)^p = a^p+b^p$.</p>
              </li>
              <li>
                <p>{'$\\Phi_{p^r}(x)$'} is irreducible if {'$\\Phi_{p^r}(x+1)$'} is irreducible. Note that</p>
                {`$$
                  (x+1)^{p^n} = \\sum_{k=0}^{p^n}{p^n \\choose k}x^k.
                $$`}
                <p>Since $p$ is prime, we have {'$\\left.p\\middle|{p^n \\choose k}\\right.$'} for {'$0 < k < p^n$'}. This means that in {'$\\Bbb{F}_p[x]$'} with characteristic $p$,</p>
                {`$$
                  \\begin{align}
                    && (x+1)^{p^{r-1}} & = x^{p^{r-1}}+1, \\\\\\\\
                    \\text{and} && \\Phi_{p^r}(x+1) & = \\frac{\\left(x^{p^{r-1}}+1\\right)^p-1}{x^{p^{r-1}}+1-1} \\\\
                    && & = \\frac{\\left(x^{p^{r-1}}\\right)^p}{x^{p^{r-1}}} \\\\
                    && & = x^{p^{r-1}(p-1)}.
                  \\end{align}
                $$`}
                <p>Back in {'$\\Bbb{Z}[x]$'}, this implies that all the terms of {'$\\Phi_{p^r}$'} are divisible by the prime $p$ except for the term of the highest degree of {'$p^{r-1}(p-1)$'}. By looking at the terms of smallest degree in the numerator and denominator, we see</p>
                {`$$
                  \\Phi_{p^r}(x+1) = \\frac{(x+1)^{p^r}-1}{(x+1)^{p^{r-1}}-1} = \\frac{\\cdots + p^rx}{\\cdots + p^{r-1}x}.
                $$`}
                <p>Thus the constant term is {'$p^rx/p^{r-1}x = p$'} and is not divisible by $p^2$. By {'$\\text{Eisenstein’s criterion}$'}, {'$\\Phi_{p^r}(x+1)$'} is irreducible, and thus so is {'$\\Phi_{p^r}(x)$'}.</p>
              </li>
            </ol>
          </li>
          <li>
            <ol class='letters'>
              <li>
                <p>Let {'$a = \\alpha_1 + \\alpha_2\\sqrt{-n}$'} and {'$b = \\beta_1 + \\beta_2\\sqrt{-n}$'} so that</p>
                {'$$ab = (\\alpha_1\\beta_1-\\alpha_2\\beta_2n) + (\\alpha_1\\beta_2 + \\alpha_2\\beta_1)\\sqrt{-n}.$$'}
                <p>Then</p>
                {`$$
                  \\begin{align}
                    N(ab) & = (\\alpha_1\\beta_1-\\alpha_2\\beta_2n)^2 + n(\\alpha_1\\beta_2 + \\alpha_2\\beta_1)^2 \\\\
                    & = (\\alpha_1^2+n\\alpha_2^2)(\\beta_1^2+n\\beta_2^2) \\\\
                    & = N(a)N(b).
                  \\end{align}
                $$`}
              </li>
              <li>
                <p>Suppose $a$ is a unit, and let $ab = 1$. Then $N(a)N(b) = N(1) = 1$. Since $N$ is nonnegative, it must be that $N(a) = N(b) = 1$.</p>
                <p>Suppose $N(a) = 1$, and let {'$a = \\alpha + \\beta\\sqrt{-n}$'}. Since $n > 2$, we must have $\beta^2 = 0$ and also $\alpha^2 = 1$. Thus $a = \pm1$ and $a$ is a unit.</p>
                <p>Altogether, this means that the only units {'$\\Bbb{Z}[\\sqrt{-n}]$'} are $1, -1$.</p>
              </li>
              <li>
                <p>Suppose $2$ is reducible and $2 = ab$ where $a, b$ are not units. Then $N(2) = N(a)N(b)$. Since $N$ is nonnegative, either $N(a) = 1$ or $N(b) = 1$, and by {'$\\text{(b)}$'}, either $a$ or $b$ is a unit which is a contradiction. Thus $2$ is irreducible.</p>
              </li>
              <li>
                <p>Let $n$ be odd. Then {'$N(1+\\sqrt{-n}) = 1+n$'} is even.</p>
                <p>Let {'$a = 1+\\sqrt{-n}$'} and {'$b = 1-\\sqrt{-n}$'}. Then $ab = 1+n > 2$ is divisible by $2$, but $2$ does not divide $a$ nor $b$. Thus $2$ is irreducible but not prime, which means {'$\\Bbb{Z}[\\sqrt{-n}]$'} cannot be a UFD.</p>
              </li>
            </ol>
          </li>
        </ol>
      </Homework>
    )
  }
}

export default HW4
