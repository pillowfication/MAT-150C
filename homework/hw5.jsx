import React, { Component } from 'react'
import Homework from '../Homework.jsx'

import o11 from './hw5-o11.png'

class HW5 extends Component {
  render () {
    return (
      <Homework index='5'>
        <ol className='base'>
          <li>
            <p>Let {'$\\delta = \\sqrt{d} = \\sqrt{-11}$'}. Note that {'$d \\equiv 1 \\pmod{4}$'} so {'$\\mathcal{O}_\\delta$'} is the lattice of integers and half-integers as pictured.</p>
            <figure style={{ textAlign: 'center', margin: '1em 0' }}>
              <img src={o11} />
              <figcaption>The lattice {'$\\mathcal{O}_\\delta$'}</figcaption>
            </figure>
            <p>Furthermore, let {'$a \\in \\Bbb{C}$'} be a complex number. In the worst case, $a$ is {'$\\frac{3}{\\sqrt{11}} < 1$'} from an element of {'$\\mathcal{O}_\\delta$'} as depicted by the red dot above.</p>
            {`$$
              \\frac{x}{\\frac{\\sqrt{3}}{2}} = \\frac{\\sqrt{3}}{\\frac{\\sqrt{11}}{2}} \\implies x = \\frac{3}{\\sqrt{11}}.
            $$`}
            <p>Let $\sigma(a) = \left|a\right|^2$ be a size function over {'$\\Bbb{C}$'} which has been shown to be multiplicative. Let {'$a, b \\in \\mathcal{O}_\\delta$'} be two arbitrary elements with $b \neq 0$. Then let {'$q\' = a/b \\in \\Bbb{C}$'}. If {'$q\' \\in \\mathcal{O}_\\delta$'}, then the division algorithm holds with $a = bq'$. Otherwise, there is an element {'$q \\in \\mathcal{O}_\\delta$'} within a distance of $1$ from $q'$. Let $r = a-bq$ so that $a = bq+r$ where {'$q,r \\in \\mathcal{O}_\\delta$'}. It follows that</p>
            {`$$
              \\frac{\\sigma(r)}{\\sigma(b)} = \\sigma\\left(\\frac{r}{b}\\right) = \\sigma\\left(q'-q\\right) < 1.
            $$`}
            <p>This implies that {'$\\sigma(r) < \\sigma(b)$'}. Let {'$E: \\left(\\mathcal{O}_\\delta \\setminus \\{0\\}\\right) \\to \\Bbb{Z}^+$'} be defined as $E(a) = 4\sigma(a)$ which is a Euclidean function for {'$\\mathcal{O}_\\delta$'}. Therefore {'$\\mathcal{O}_\\delta$'} is a Euclidean domain and therefore also a unique factorization domain.</p>
          </li>
          <li>
            <p>Let $f : R \to R'$ be a ring homomorphism, and let {'$\\mathfrak{p}\' \\subseteq R\'$'} be a prime ideal. Let {'$\\mathfrak{p} = f^{-1}(\\mathfrak{p}\')$'}. Since {'$0 \\in \\mathfrak{p}\'$'} and $f(0) = 0$, it follows that {'$0 \\in \\mathfrak{p}$'} and {'$\\mathfrak{p}$'} is not empty. Let {'$a, b \\in \\mathfrak{p}$'} and $r \in R$. Then</p>
            {`$$
              \\begin{align}
                f(a+b) & = f(a) + f(b) \\in \\mathfrak{p}' && \\implies a+b \\in \\mathfrak{p}, \\\\
                f(ra) & = f(r)f(a) \\in \\mathfrak{p}' && \\implies ra \\in \\mathfrak{p}.
              \\end{align}
            $$`}
            <p>Thus {'$\\mathfrak{p}$'} is an ideal in $R$. Now let $I, J \subseteq R$ be ideals such that {'$IJ \\subseteq \\mathfrak{p}$'}. Let $f_X$ denote $f(X)$ to clear up parentheses. Then {'$(f_{IJ}) = (f_I)(f_J) \\subseteq \\mathfrak{p}\'$'}.</p>
            <blockquote>
              <p>{'$f_{IJ} \\subseteq \\mathfrak{p}\'$'} and {'$(f_{IJ})$'} is the smallest ideal containing {'$f_{IJ}$'}, which means {'$(f_{IJ}) \\subseteq \\mathfrak{p}\'$'}.</p>
              <p>Let {'$x \\in (f_{IJ})$'} so that $x = r(f_if_j)$ for some $r \in R', i \in I, j \in J$. Then $x = (rf_i)(f_j) \in (f_I)(f_J)$.</p>
              <p>Similarly, let $x \in (f_I)(f_J)$ so that {'$x = (r_if_i)(r_jf_j) = r_ir_j(f_if_j) \\in (f_{IJ})$'}.</p>
            </blockquote>
            <p>Since {'$\\mathfrak{p}\'$'} is prime, either {'$(f_I) \\subseteq \\mathfrak{p}\'$'} in which case {'$I \\subseteq f^{-1}\\big[(f_I)\\big] \\subseteq f^{-1}\\big[\\mathfrak{p}\'\\big] = \\mathfrak{p}$'}, or {'$(f_J) \\subseteq \\mathfrak{p}\'$'} in which case {'$J \\subseteq f^{-1}\\big[(f_J)\\big] \\subseteq f^{-1}\\big[\\mathfrak{p}\'\\big] = \\mathfrak{p}$'}.</p>
          </li>
          <li>
            <ol class='letters'>
              <li>
                <p>The zero ideal is a subset of every ideal, so by definition, {'$V(0) = \\operatorname{Spec}(R)$'}. By definition of a prime ideal, $R$ is not prime, and it is also not the subset of any other ideal. Thus $V(R) = \emptyset$.</p>
              </li>
              <li>
                <p>Let {'$\\mathfrak{p} \\in V(IJ)$'} which means {'$\\mathfrak{p}$'} is a prime ideal containing $IJ$. Since {'$\\mathfrak{p}$'} is prime, then either {'$I \\subseteq \\mathfrak{p}$'} in which case {'$\\mathfrak{p} \\in V(I)$'}, or {'$J \\subseteq \\mathfrak{p}$'} in which case {'$\\mathfrak{p} \\in V(J)$'}. Now suppose that {'$\\mathfrak{p} \\in V(I) \\cup V(J)$'} and assume that {'$\\mathfrak{p} \\in V(I)$'} so that {'$I \\subseteq \\mathfrak{p}$'} where {'$\\mathfrak{p}$'} is prime. Then {'$IJ \\subseteq I \\subseteq \\mathfrak{p}$'} which means {'$\\mathfrak{p} \\in V(IJ)$'}.</p>
              </li>
              <li>
                <p>Let {'$\\mathfrak{p} \\in V(J)$'} so that {'$\\mathfrak{p}$'} is a prime and {'$J \\subseteq \\mathfrak{p}$'}. In particular, {'$I_\\lambda \\subseteq J \\subseteq \\mathfrak{p}$'} which means {'$\\mathfrak{p} \\in V(I_\\lambda)$'} and</p>
                {`$$
                  V(J) \\subseteq \\bigcap_{\\lambda\\in\\Lambda} V(I_\\lambda).
                $$`}
                <p>Let {'$\\mathfrak{p} \\in \\bigcap_{\\lambda\\in\\Lambda} V(I_\\lambda)$'} so that {'$\\mathfrak{p}$'} is a prime and {'$I_\\lambda \\subseteq \\mathfrak{p}$'} for all $\lambda \in \Lambda$. Let {'$j = \\sum_{\\lambda\\in\\Lambda} r_\\lambda f_\\lambda \\in J$'}. Since $I_\lambda$ and {'$\\mathfrak{p}$'} are ideals, we have {'$r_\\lambda f_\\lambda \\in I_\\lambda \\subseteq \\mathfrak{p}$'} and {'$j = \\sum_{\\lambda\\in\\Lambda} r_\\lambda f_\\lambda \\in \\mathfrak{p}$'} (it is a finite sum). This means {'$J \\subseteq \\mathfrak{p}$'}, so {'$\\mathfrak{p} \\in V(J)$'} and</p>
                {`$$
                  \\bigcap_{\\lambda\\in\\Lambda} V(I_\\lambda) \\subseteq V(J).
                $$`}
              </li>
            </ol>
          </li>
        </ol>
      </Homework>
    )
  }
}

export default HW5
