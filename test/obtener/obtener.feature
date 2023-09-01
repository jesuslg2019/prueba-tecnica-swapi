Feature: Obtener datos swapi

    Scenario Outline: Recuperar datos con éxito
        Given se envía el get con <service> y <number>
        When consulta el api
        Then se muestra resultado <response> ok

        Examples:
            | service | number | response            |
            | planets | 1      | responseDatosExito1 |