import React, { Component } from 'react'
import Homework from '../Homework.jsx'

class HW2 extends Component {
  render () {
    return (
      <Homework index='2'>
        <h1>Computational Exercises</h1>
        <ol className='base'>
          <li>
            <p>By {'$\\text{Hilbert’s Nullstellensatz}$'}, there is a bijection between maximal ideals containing $f$ and the points satisfying $f(x, y) = 0$. Therefore we can count all the solutions to the system of equations</p>
            {`$$
              \\begin{align}
                x^2 + y^2 - 5 & = 0 \\\\
                xy - 2 & = 0.
              \\end{align}
            $$`}
            <p>The second equation asserts {'$y = 2/x$'}. Plugging that into the first equation gives</p>
            {`$$
              x^2 - 5 + \\frac{4}{x^2} = 0 \\implies \\left(x - \\frac{1}{x}\\right) \\left(x - \\frac{4}{x}\\right) = 0.
            $$`}
            <p>There are 4 solutions:</p>
            {'$$(1, 2),\\quad(-1, -2),\\quad(2, 1),\\quad(-2, -1).$$'}
          </li>
          <li>
            <ol className='letters'>
              <li>
                <p>{'$\\phantom{0}$'}</p>
                {`$$
                  \\begin{align}
                    x^3 + x^2 + x + 1 & = x^3 + 3x^2 + 3x + 1 \\\\
                    & = (x + 1)(x + 1)(x + 1).
                  \\end{align}
                $$`}
              </li>
              <li>
                <p>{'$\\phantom{0}$'}</p>
                {`$$
                  \\begin{align}
                    x^2 - 3x - 3 & = x^2 - 3x + 2 \\\\
                    & = (x - 2)(x - 1) \\\\
                    & = (x + 3)(x + 4).
                  \\end{align}
                $$`}
              </li>
            </ol>
          </li>
        </ol>

        <h1>Theoretical Exercises</h1>
        <ol className='base'>
          <li>
            <p>It has been shown that {'$V(f_1,\\ldots,f_n) \\cap V(f_{n+1},\\ldots,f_m) = V(f_1,\\ldots,f_{n+m})$'} is an algebraic variety. Therefore</p>
            {`$$
              \\begin{align}
                V(f_1,\\ldots,f_k) \\cup V(g_1,\\ldots,g_m) & = \\bigg[\\bigcap_i V(f_i)\\bigg] \\cup \\bigg[\\bigcap_j V(g_j)\\bigg] \\\\
                & = \\bigcap_{i,j} \\bigg[V(f_i) \\cup V(g_j)\\bigg].
              \\end{align}
            $$`}
            <p>Thus it suffices to show that $V(f) \cup V(g)$ is an algebraic variety for any {'$f, g \\in \\Bbb{C}[x_1,\\ldots,x_n]$'}. Let $x$ be in the algebraic variety $V(fg)$. This means $[fg](x) = 0$, so either $f(x) = 0$ or $g(x) = 0$. Thus $x \in V(f) \cup V(g)$. And if $x \in V(f) \cup V(g)$, then either $f(x) = 0$ or $g(x) = 0$, which means $[fg](x) = 0$ and $x \in V(fg)$. Therefore $V(f) \cup V(g) = V(fg)$ is an algebraic variety.</p>
          </li>
          <li>
            <p>Let $(x, y) \in V(f) \cap L$. Then $(x, y)$ must satisfy $ax + by + c = 0$. If $a = b = 0$, then {'$L = \\Bbb{C}^2$'} or $L = \emptyset$, and this theorem does not apply. Thus either $x$ or $y$ must have a non-zero coefficient, and we can solve for it. Assume $y$ has a non-zero coefficient, so {'$y = -ab^{-1}x - cb^{-1}$'}, a polynomial of degree at most 1. Also $(x, y)$ must satisfy $f(x, y) = 0$. Substituting {'$y = -ab^{-1}x - cb^{-1}$'} into $f(x, y)$ gives another polynomial {'$f\'(x) \\in \\Bbb{C}[x]$'} with degree at most $d$ or it is the zero polynomial. If $f'$ is not zero, it has at most $d$ roots, and thus there are at most $d$ such points that satisfy both $L$ and $V(f)$. Otherwise there are infinitely many points because $L \subseteq V(f)$.</p>
          </li>
          <li>
            <p>Define the <i>small-degree</i> of a polynomial to be the degree of its first non-zero term (the zero polynomial does not have a small-degree). For example, $x - 2$ has small-degree $0$, and $x^2 + x^4 + x^6 + \cdots$ has small-degree $2$. Note that if $f$ has small-degree $n$ and $g$ has small-degree $m$, then $fg$ has small-degree $n+m$.</p>
            <p>The units in {'$\\Bbb{C}[[x]]$'} are precisely the polynomials with small-degree $0$ (the polynomials with non-zero constant term). Let $f(x)$ be a polynomial of small-degree $n \geq 2$. Then $f(x)$ can be written as $f(x) = x \cdot g(x)$ where $x$ and $g(x)$ have small-degrees greater than $0$. Thus $f$ is not irreducible, and the irreducible polynomials in {'$\\Bbb{C}[[x]]$'} are precisely the polynomials with small-degree $1$. Furthermore, $f$ can be written as</p>
            {`$$
              f(x) = \\underbrace{xx \\cdots x}_{\\text{$n-1$ times}} \\cdot h(x)
            $$`}
            <p>where $h(x)$ is a polynomial of small-degree $1$. Every polynomial that is not a unit, is either irreducible or can be written as a product of irreducibles.</p>
            <p>Suppose {'$f \\in \\Bbb{C}[[x]]$'} has two factorizations</p>
            {`$$
              f(x) = p_1 p_2 \\cdots p_r = q_1 q_2 \\cdots q_s.
            $$`}
            <p>Since the small-degrees of $p_i$ and $q_j$ are all $1$, $r = s$. Every irreducible $r(x)$ can be written as $r(x) = x \cdot u(x)$ where $u(x)$ has small-degree $0$ and is invertible. Let $f = xu$ and $g = xv$ be two irreducible. Then {'$f = gv^{-1}u$'} where {'$v^{-1}u$'} is a unit, and all irreducibles are associates. Thus {'$\\Bbb{C}[[x]]$'} is a unique factorization domain.</p>
          </li>
        </ol>
      </Homework>
    )
  }
}

export default HW2
