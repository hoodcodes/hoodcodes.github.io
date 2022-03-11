[Home](../) > [Security](./)

# JWT Reference

JWT - Is used strictly for AUTHORIZATION

Traditionally, sessions have been used to handle authorization

graphic showing contrast between traditional sessions vs. JWT:

With sessions, information is stored on the server.

However with JWT, there is no need to store anything on the server. The information is stored in the JWT itself. It is stored on the client instead.

https://jwt.io/ - neat little playground for working with JWTs.

JWT enables Single Sign-On - since there is nothing needed to be stored on the server. A user could log into one server for an organization, get the JWT, storing it locally on the user machine, and then call a different organizational server and utilize the same JWT and be logged in automatically (assuming the JWT is not expired).

setting an expiration is very important, to minimize risk of someone getting the JWT later and using it to impersonate you.

- JWT encodes a series of claims.
- some claims have a specific meaning
- others are left to be interpreted by the users

Common Claims include:

- Issuer (iss)
- Subject (sub) - usually to whom or to which app the JWT is issued
- Audience (aud)
- Expiration time (exp)
- Not before (nbf)
- Issued at (iat) - creation timestamp of JWT
- JWT ID (jti)

JWT can be:

- signed: using JWS - JSON Web Signature
  - allows JWT to be validated against modifications
- encrypted: using JWE - JSON Web Encryption
  - makes sure the content of the JWT is only readable by certain parties

If signed and encrypted - then there is a JOSE header:

- JOSE: JSON Object Signing and Encryption
- 2 attributes:
  - alg - the algorithm used to sign or encrypt the JWT
  - typ - the content that is being signed or encrypted (usually ‘JWT’)

encryption algorithms available: https://tools.ietf.org/html/rfc7518#section-3

Recommended:

- RS256 . RSASSA-PKCS1-v1_5 using SHA-256
- ES256 ECDSA using P-256 and SHA-256 (top recommend)

Both RSA and ECDSA are asymmetric encryption and digital signature algorithms. What asymmetric algorithms bring to the table is the possibility of verifying or decrypting a message without being able to create a new one.

The main difference between RSA and ECDSA lies in speed and key size. ECDSA requires smaller keys to achieve the same level of security as RSA. This makes it a great choice for small JWTs. RSA, however, is usually faster than ECDSA. As usual, pick the one that best aligns with your requirements.

JWTs are an integral part of the OpenID Connect standard, an identity layer that sits on top of the OAuth2 framework.
While the OAuth2 specification doesn't mandate a format for access tokens, used to grant applications access to APIs on behalf of users, the industry has widely embraced the use of JWTs for these as well.

One downside to using JWT: Cannot Revoke JWT

- Reference: http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/
- Revoking JWTs -
  - there is no way to revoke them early (they last as long as it has NOT expired)
  - A work around (whitelist or blacklist of JWTs) - is really the same thing as implementing sessions.
- For microservices - JWT is great. For a simple app - one person implemented an alternative below, leveraging Redis for performance and using sessions:

References:

- https://www.youtube.com/watch?v=7Q17ubqLfaM What is JWT and Why Should You Use JWT
