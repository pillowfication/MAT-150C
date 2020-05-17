import React, { Component } from 'react'
import Homework from '../Homework.jsx'

class HW6 extends Component {
  render () {
    return (
      <Homework index='6'>
        <ol className='base'>
          <li>
            <p>Let $R$ be a finite integral domain, and let $r \neq 0 \in R$. Since $R$ is finite, there exist {'$n, m \\in \\Bbb{Z}$'} such that $r^n = r^m$ and {'$m > n$'}. Thus</p>
            {`$$
              r^n - r^m = r^n(1-r^{m-n}) = 0.
            $$`}
            <p>Since $R$ is an integral domain, either $r^n = 0$ or {'$(1-r^{m-n}) = 0$'}. But powers of $r$ are nonzero because $r \neq 0$, and therefore</p>
            {`$$
              1-r^{m-n} = 0 \\implies r^{m-n} = r(r^{m-n-1}) = 1.
            $$`}
            <p>This means that $r$ is invertible, and $R$ is a field.</p>
          </li>
          <li>
            <ol class='letters'>
              <li>
                <p>Let {'$f(x) \\in \\Bbb{R}[x]$'}. Let $z$ be a root of $f$ so that $f(z) = 0$. Thus</p>
                {`$$
                  f(\\overline{z}) = \\sum_n a_n(\\overline{z})^n = \\sum_n \\overline{a_nz^n} = \\overline{\\sum_n a_nz^n} = \\overline{0} = 0
                $$`}
                <p>and {'$\\overline{z}$'} is also a root of $f$.</p>
              </li>
              <li>
                <p>Let {'$f(x) \\in \\Bbb{R}[x]$'} be a real polynomial of degree $n$. Then $f$ has $n$ complex roots, and</p>
                {`$$
                  f(x) = \\prod_{i=0}^n (x-z_i),\\quad\\text{where $z \\in \\Bbb{C}$}.
                $$`}
                <p>Since roots come in conjugate pairs, if $z$ is a nonreal root of $f$, then {'$(x-z)(x-\\overline{z}) = x^2-(z+\\overline{z})x + z\\overline{z}$'} divides $f$ where {'$x^2-(z+\\overline{z})x + z\\overline{z} \\in \\Bbb{R}[x]$'}. Therefore any real polynomial can be written as a product of real polynomials with degree at most $2$, and any irreducible polynomial must have degree at most $2$.</p>
              </li>
              <li>
                <p>Let {'$f(x) \\in \\Bbb{R}[x]$'} be a real polynomial of odd degree. Let $f = p_1p_2 \cdots p_n$ be a decomposition of $f$ into irreducibles. Since $\deg(f) = \sum_i \deg(p_i)$, at least one of $p_i$ must have odd degree. If $p_i$ is an irreducible polynomial of odd degree, then it has degree $1$ and is equal to $x - z$ where $z$ is a real root of $f$.</p>
              </li>
            </ol>
          </li>
          <li>
            <p>Since {'$\\Bbb{F} \\subseteq \\Bbb{F}(\\alpha^2) \\subseteq \\Bbb{F}(\\alpha)$'}, we have</p>
            {`$$
              [\\Bbb{F}(\\alpha) : \\Bbb{F}] = [\\Bbb{F}(\\alpha) : \\Bbb{F}(\\alpha^2)][\\Bbb{F}(\\alpha^2) : \\Bbb{F}].
            $$`}
            <p>Suppose {'$\\Bbb{F}(\\alpha^2) \\neq \\Bbb{F}(\\alpha)$'}. Since $\alpha$ is a root of {'$x^2 - \\alpha^2 \\in \\Bbb{F}(a^2)[x]$'}, then {'$[\\Bbb{F}(\\alpha) : \\Bbb{F}(\\alpha^2)] = 2$'}. But this is a contradiction because {'$[\\Bbb{F}(\\alpha) : \\Bbb{F}(\\alpha^2)]$'} does not divide {'$[\\Bbb{F}(\\alpha) : \\Bbb{F}]$'}.</p>
          </li>
          <li>
            <p>We have the chain of field extensions {'$\\Bbb{Q} \\subseteq \\Bbb{Q(\\zeta_p)} \\subseteq \\Bbb{Q(\\zeta_{p^r})}$'}, so</p>
            {`$$
              [\\Bbb{Q}(\\zeta_{p^r}) : \\Bbb{Q}] = [\\Bbb{Q}(\\zeta_{p^r}) : \\Bbb{Q}(\\zeta_p)][\\Bbb{Q}(\\zeta_p) : \\Bbb{Q}].
            $$`}
            <p>{'$\\zeta_{p^r}$'} is a root of {'$x^{p^{r-1}} - \\zeta_p$'} over {'$\\Bbb{Q}(\\zeta_p)$'}, which means {'$[\\Bbb{Q}(\\zeta_{p^r}) : \\Bbb{Q}(\\zeta_p)] = p^{r-1}$'} (and it is probably irreducible because of $\zeta_p$). $\zeta_p$ has been shown to be a root of the irreducible polynomial {'$\\Phi_p(x) = \\sum_{i=0}^{p-1}x^i$'}, which means {'$[\\Bbb{Q}(\\zeta_p) : \\Bbb{Q}] = p-1$'}. Thus</p>
            {`$$
              [\\Bbb{Q}(\\zeta_{p^r}) : \\Bbb{Q}] = p^{r-1} \\cdot (p-1).
            $$`}
          </li>
          <li>
            <p>Suppose {'$\\zeta_5 \\in \\Bbb{Q}(\\zeta_7)$'}, so that {'$\\Bbb{Q}(\\zeta_5) \\subseteq \\Bbb{Q}(\\zeta_7)$'}. Then {'$[\\Bbb{Q}(\\zeta_5) : \\Bbb{Q}] = 4$'} divides {'$[\\Bbb{Q}(\\zeta_7) : \\Bbb{Q}] = 6$'} which is a contradiction.</p>
          </li>
        </ol>
      </Homework>
    )
  }
}

export default HW6
