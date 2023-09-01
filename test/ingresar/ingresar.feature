Feature: Ingreso de datos Swapi

    Scenario Outline: Agregar datos con exito
        Given se envía el request <request> con datos swapi
        When ingresa datos a la bd
        Then se muestra resultado <response> ok

        Examples:
            | request             | response            |
            | insertarDatosExito1 | responseDatosExito1 |

    Scenario Outline: Agregar datos sin exito
        Given se envía el request <request> con datos swapi
        When ingresa datos a la bd
        Then se muestra resultado <response> error

        Examples:
            | request             | response            |
            | insertarDatosError1 | responseDatosError1 |

