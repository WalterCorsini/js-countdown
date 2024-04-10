# SVOLGIMENTO
In una cartella a parte create il cronometro che mostra secondi e minuti.
Inserite un bottone per avviare il cronometro, un'altro bottone per stoppare il cronometro e un'altro bottone ancora per resettare il cronometro.

## INPUT

1. creo foglio html
2. creto una lista per inserire i tempi fatti dall'utente con id "records
3. creo due tag span rispettivamente con id "minuti" e "secondi" con valore 0
4. creo due bottoni rispettivamente con id "start" e "stop"
    - il primo non avra nessuna classe
    - al secondo gli do una classe disabled alla quale il pulsante non potra essere cliccato
5. creo un span con id "message" qualore l'utente raggiunge il tempo massimo gli do una risposta a video
4. creo foglio javascript
5. creo le variabili secondi e minuti inizializzate a "0";
6. creo due variabili a cui collego i 2 bottoni start and reset
7. creo due variabili a cui collego i 2 tag span per minuti e secondi
8. creo variabile per collegare il messaggio di tempo limite raggiunto
9. creo variabile controllo per il bottone start
10. creo variabile di indice tempi salvati

## LOGIC E OUTPUT
8. quando premo sul bottone start
    - rimuovo classe disabled al bottone stop
    - cancello eventuali precendenti messaggi nella variabile message.
    - incremento contatore controllo per bottone start
    - creo una variabile per salvare setIntervale la associo.
    - avvio seInterval con 1 iterazione ogni 1000 millisecondi
    se il controllo da resto 0
        - trasformo il testo del bottone start in pause 
        - incremento la variabile secondi
        se secondi è uguale a 60 secondi
            -  variabile secondi diventa "0"
            -  variabile minuti viene incrementata
            se la variavbile minuti è uguale a 60
                - azzero la variabile secondi
                - do un messaggio che è passata gia un ora
                - invoco la funzione per salvare il tempo
                    - controlla che il tempo non sia a 0
                        - se è a 0 restituira un errore di alert
                        - altrimenti creera un elemento li e lo inserira in pagina
                        - incrementa l'indice
                - interrompo setInterval
                - invoco la funzione reset
                    - ripristino tutti i valori(testo e classe bottini, testo di minuti e secondi in pagina, contatore minuti e secondi e la variabile di controllo del bottone start.)
            invoco la funzione di stampa
                - creo le variabili per i secondi e minuti
                - se i minuti e i secondi sono minori o uguali a 9
                    - alla variabile secondi e/o minuti concateno il valore "0" al valore dei secondi e/o minuti 
                altrimenti
                    - alla variabile secondi e/o minuti assegno il valore senza concatenare nulla
        altrimenti
            - trasformo il testo del bottone pause in start
            - interrompo setInterval
    - gestisco il click del bottone reset
        al click del bottone reset
        - aggiungo la classe disabled al bottone
        - invoco la funzione per salvare il tempo
        - interrompo setInterval
        - invoco la funzione reset


